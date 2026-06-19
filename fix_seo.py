import os
import re

app_dir = "app"
css_file = "app/globals.css"

# 1. Update globals.css to support h3 in cta-banner
with open(css_file, "r") as f:
    css_content = f.read()

css_content = css_content.replace(".cta-banner__content h2 {", ".cta-banner__content h2,\n.cta-banner__content h3 {")
with open(css_file, "w") as f:
    f.write(css_content)

# 2. Iterate and replace across all JS files
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith(".js"):
            filepath = os.path.join(root, file)
            with open(filepath, "r") as f:
                content = f.read()
            
            # Replace duplicate H2
            content = content.replace("<h2>Ready to get started?</h2>", "<h3>Ready to get started?</h3>")
            content = content.replace("<h2>GET A FREE QUOTE</h2>", "<h3>GET A FREE QUOTE</h3>")
            
            # Replace images without width
            # A simple regex to find <img ...> that doesn't have width=
            def img_repl(match):
                img_tag = match.group(0)
                if 'width=' not in img_tag and 'height=' not in img_tag:
                    return img_tag.replace('<img ', '<img width="800" height="600" loading="lazy" ')
                return img_tag
                
            content = re.sub(r'<img [^>]+>', img_repl, content)
            
            with open(filepath, "w") as f:
                f.write(content)

print("SEO fixes applied.")
