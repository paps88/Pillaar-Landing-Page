import { Cable as Cube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Cube className="h-8 w-8 text-foreground" strokeWidth={1.5} />
              <span className="text-2xl font-light tracking-tight text-foreground">MEMORIALVISION</span>
            </div>
            <p className="text-base text-muted-foreground max-w-md leading-relaxed">
              Professional 3D memorial design software for funeral homes and monument companies. Transform how families
              design custom gravestones, headstones, and tombstones with photorealistic visualization.
            </p>
            <p className="text-sm text-muted-foreground">© 2025 MemorialVision. All rights reserved.</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">Product</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>
                <a href="#features" className="transition-opacity hover:opacity-60">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">Company</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Footer */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Memorial design platform | Gravestone design software | 3D headstone visualization | Tombstone customization
            | Funeral home technology | Monument design tools | Custom memorial solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
