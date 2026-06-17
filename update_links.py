import os
import re
import glob

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # 1. Update nav-dropdown for Locations
    nav_pattern = re.compile(
        r'(Locations/Areas\s*<Chevron />\s*</a>\s*<div className="nav-dropdown">).*?(</div>)',
        re.DOTALL
    )
    nav_replacement = r'''\1
              <a href="/locations/the-villages">The Villages</a>
              <a href="/locations/champions-gate">Champions Gate</a>
              <a href="/locations/haines-city">Haines City</a>
              <a href="/locations/clermont-celebration">Clermont</a>
              <a href="/locations/clermont-celebration">Celebration</a>
              <a href="/locations/kissimmee">Kissimmee</a>
              <a href="/locations/reunion">Reunion</a>
              <a href="#">Winter Haven</a>
            \2'''
    content = nav_pattern.sub(nav_replacement, content)

    # 2. Update Footer Locations
    footer_pattern = re.compile(
        r'(<h4>Locations/Areas</h4>\s*<ul>).*?(</ul>)',
        re.DOTALL
    )
    footer_replacement = r'''\1
            <li><a href="/locations/the-villages">The Villages</a></li>
            <li><a href="/locations/champions-gate">Champions Gate</a></li>
            <li><a href="/locations/haines-city">Haines City</a></li>
            <li><a href="/locations/clermont-celebration">Celebration</a></li>
            <li><a href="/locations/reunion">Reunion</a></li>
            <li><a href="/locations/clermont-celebration">Clermont</a></li>
            <li><a href="/locations/kissimmee">Kissimmee</a></li>
            <li><a href="#">Winter Haven</a></li>
          \2'''
    content = footer_pattern.sub(footer_replacement, content)

    # 3. Update About Us links
    content = re.sub(r'href="/#about"', r'href="/about"', content)

    with open(filepath, 'w') as f:
        f.write(content)

# Update all page.js files
for filepath in glob.glob('app/**/page.js', recursive=True):
    update_file(filepath)
    print(f'Updated {filepath}')
