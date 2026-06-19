import os

app_dir = "app"

for root, dirs, files in os.walk(app_dir):
    if "page.js" in files and root != app_dir:
        # Generate layout.js
        rel_path = os.path.relpath(root, app_dir)
        # Format title based on folder name
        parts = rel_path.replace("-", " ").split("/")
        title = " ".join([p.title() for p in parts])
        
        layout_content = f"""export const metadata = {{
  title: "{title}",
  description: "Professional {title.lower()} services by Florida Concrete Coating. Serving Davenport and surrounding areas with premium quality solutions.",
  alternates: {{
    canonical: '/{rel_path}',
  }},
}};

export default function Layout({{ children }}) {{
  return children;
}}
"""
        layout_path = os.path.join(root, "layout.js")
        if not os.path.exists(layout_path):
            with open(layout_path, "w") as f:
                f.write(layout_content)
            print(f"Created {layout_path}")

