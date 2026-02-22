import re
import os
import sys

if len(sys.argv) < 2:
    print("Usage: python fix_links.py <path/to/newsletter.md>")
    sys.exit(1)

filepath = sys.argv[1]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove HTML wrappers but keep the content/image
content = re.sub(r'<table><tbody><tr><td><a href="(.*?)"[^>]*><img src="(.*?)"[^>]*></a></td></tr></tbody></table>', r'[![img](\2)](\1)', content)

# Remove HTML wrappers from footer text
content = re.sub(r'<table><tbody><tr><td>\s*<p class="smaller-p">\s*(.*?)\s*</p>\s*</td></tr></tbody></table>', r'_\1_', content, flags=re.DOTALL)

# Remove HTML anchor wrappers for headers
content = re.sub(r'## <a id="[^"]*" name="[^"]*" class="link-no-markup">(.*?)</a>', r'## \1', content)
content = re.sub(r'### <a id="[^"]*" name="[^"]*" class="link-no-markup">(.*?)</a>', r'### \1', content)

# Fix Table of Contents anchors
content = re.sub(r'\[Recent Academic Publications\]\(#Recent-Academic-Publications\)', '[Recent Academic Publications](#recent-academic-publications)', content)
content = re.sub(r'\[Special Mention\]\(#Special-Mention\)', '[Special Mention](#special-mention)', content)
content = re.sub(r'\[Datasets Published\]\(#Datasets-Published\)', '[Datasets Published](#datasets-published)', content)
content = re.sub(r'\[Events\]\(#Events\)', '[Events](#events)', content)
content = re.sub(r'\[Talks and Conferences\]\(#Talks_and_Conferences\)', '[Talks and Conferences](#talks-and-conferences)', content)
content = re.sub(r'\[Training Opportunities\]\(#Training_Opportunities\)', '[Training Opportunities](#training-opportunities)', content)
content = re.sub(r'\[Call for Papers\]\(#Call_for_Papers\)', '[Call for Papers](#call-for-papers)', content)
content = re.sub(r'\[Fellowships, Scholarships, and Job Opportunities\]\(#Fellowships_Scholarships_Job_Opportunities\)', '[Fellowships, Scholarships, and Job Opportunities](#fellowships-scholarships-and-job-opportunities)', content)

# Clean up any malformed image links from previous runs
content = content.replace('){:target="_blank"}]', ')]')
content = content.replace('){:target="_blank"}](', ')](')

def add_target_blank(match):
    text = match.group(1)
    url = match.group(2)
    return f"[{text}]({url})" + '{:target="_blank"}'

# A robust pattern that strictly matches outer links containing either an image ![]() or plain text
# The (?<!!) negative lookbehind prevents it from injecting the target inside an image markdown tag
pattern = r'(?<!!)\[((?:!\[.*?\]\(.*?\)|[^\]]+?))\]\((https?://[^\)]+)\)(?!\s*\{:target)'
content = re.sub(pattern, add_target_blank, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
