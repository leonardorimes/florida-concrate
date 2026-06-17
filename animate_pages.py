import re
import glob

def animate_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Add import if missing
    if "import { FadeIn, StaggerContainer, StaggerItem }" not in content:
        # insert after first import
        content = re.sub(r'(import .*?;)', r'\1\nimport { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/Animations";', content, count=1)
        # if no import found, try after "use client"
        if "import { FadeIn" not in content:
             content = content.replace('"use client";', '"use client";\nimport { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/Animations";')
        # if still no import (because we use relative path in page.js), fix it for page.js
        content = content.replace('import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/Animations";', 'import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animations";')

    # Animate Expertise
    content = content.replace('<div className="expertise__inner">', '<FadeIn className="expertise__inner">')
    content = content.replace('      </div>\n    </section>\n  );\n}\n\nfunction StepsSection', '      </FadeIn>\n    </section>\n  );\n}\n\nfunction StepsSection')

    # Animate StepsSection
    content = content.replace('<div className="process__copy">', '<FadeIn className="process__copy">')
    content = content.replace('        </div>\n\n        <div className="process__cards">', '        </FadeIn>\n\n        <StaggerContainer className="process__cards">')
    content = content.replace('<article className="process__card">', '<StaggerItem className="process__card">')
    content = content.replace('</article>', '</StaggerItem>')
    content = content.replace('        </div>\n\n        <div className="process__cta-wrap">', '        </StaggerContainer>\n\n        <div className="process__cta-wrap">')

    # Animate ServicesSection
    content = content.replace('<div className="services__head">', '<FadeIn className="services__head">')
    content = content.replace('        </div>\n\n        <div className="services__grid">', '        </FadeIn>\n\n        <StaggerContainer className="services__grid">')
    content = content.replace('<a href={it.link || "#"} className="service-card"', '<StaggerItem as="a" href={it.link || "#"} className="service-card"')
    content = content.replace('</a>\n          ))}', '</StaggerItem>\n          ))}')
    content = content.replace('        </div>\n\n        <div className="services__cta-wrap">', '        </StaggerContainer>\n\n        <FadeIn className="services__cta-wrap">')
    content = content.replace('        </div>\n      </div>\n    </section>\n  );\n}\n\n\n\n\n\nconst faqData', '        </FadeIn>\n      </div>\n    </section>\n  );\n}\n\n\n\n\n\nconst faqData')

    # Animate ResultsSection
    content = content.replace('<div className="results__head">', '<FadeIn className="results__head">')
    content = content.replace('        </div>\n        \n        <div className="results__grid">', '        </FadeIn>\n        \n        <StaggerContainer className="results__grid">')
    content = content.replace('<div className="result-column result-column--before">', '<StaggerItem className="result-column result-column--before">')
    content = content.replace('<div className="result-column result-column--after">', '<StaggerItem className="result-column result-column--after">')
    content = content.replace('          </div>\n        </div>\n      </div>\n    </section>\n  );\n}\n\nfunction InstagramSection', '          </StaggerItem>\n        </StaggerContainer>\n      </div>\n    </section>\n  );\n}\n\nfunction InstagramSection')
    # fix the first closing div of the first result-column
    content = content.replace('          </div>\n          <StaggerItem className="result-column result-column--after">', '          </StaggerItem>\n          <StaggerItem className="result-column result-column--after">')

    # Animate Hero in page.js (just the content)
    content = content.replace('<div className="hero__content">', '<FadeIn className="hero__content">')
    content = content.replace('<button className="chat-button" aria-label="Open chat">', '</FadeIn>\n        <button className="chat-button" aria-label="Open chat">')

    with open(filepath, 'w') as f:
        f.write(content)

animate_file('app/page.js')

# Also do a simpler pass for other page.js files
for filepath in glob.glob('app/**/page.js', recursive=True):
    if filepath == 'app/page.js': continue
    with open(filepath, 'r') as f:
        content = f.read()

    # We need to make sure we don't break them. Let's just wrap the whole `main` children with FadeIn.
    # Actually, they also have StepsSection inline. Let's apply the StepsSection animation to them too.
    content = content.replace('<div className="process__copy">', '<FadeIn className="process__copy">')
    content = content.replace('        </div>\n\n        <div className="process__cards">', '        </FadeIn>\n\n        <StaggerContainer className="process__cards">')
    content = content.replace('<article className="process__card">', '<StaggerItem className="process__card">')
    content = content.replace('</article>', '</StaggerItem>')
    content = content.replace('        </div>\n\n        <div className="process__cta-wrap">', '        </StaggerContainer>\n\n        <div className="process__cta-wrap">')

    if "FadeIn" in content and "import { FadeIn" not in content:
        content = content.replace('"use client";', '"use client";\nimport { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";')

    with open(filepath, 'w') as f:
        f.write(content)
