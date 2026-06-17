import re

def clean_page(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Add imports if not present
    if "import Header" not in content:
        content = content.replace('import ReviewsSection from "./components/ReviewsSection";',
                                  'import ReviewsSection from "./components/ReviewsSection";\nimport Header from "./components/Header";\nimport Footer from "./components/Footer";\nimport CTASection from "./components/CTASection";')

    # Remove function Header()
    content = re.sub(r'function Header\(\)\s*\{.*?^\}\n', '', content, flags=re.MULTILINE|re.DOTALL)
    
    # Remove function Footer()
    content = re.sub(r'function Footer\(\)\s*\{.*?^\}\n', '', content, flags=re.MULTILINE|re.DOTALL)

    # Remove function CTASection()
    content = re.sub(r'function CTASection\(\)\s*\{.*?^\}\n', '', content, flags=re.MULTILINE|re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(content)

clean_page('app/page.js')
