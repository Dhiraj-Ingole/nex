import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Search, ChevronDown } from "lucide-react";
import logoImage from 'figma:asset/7a2f69ff05bfcb3dddecd9c253ecb4a17a02fd39.png';

export function Navigation() {
  const mainNavItems = [
    {
      title: "Enterprise AI",
      items: ["AI Strategy", "Machine Learning", "Data Analytics", "AI Implementation"]
    },
    {
      title: "Platform",
      items: ["Cloud Solutions", "Data Platform", "AI Tools", "Integration"]
    },
    {
      title: "Services",
      items: ["Consulting", "Development", "Support", "Training"]
    },
    {
      title: "Industries",
      items: ["Healthcare", "Finance", "Retail", "Manufacturing"]
    },
    {
      title: "Insights",
      items: ["Blog", "Whitepapers", "Case Studies", "Research"]
    },
    {
      title: "Partners",
      items: ["Technology Partners", "Channel Partners", "Alliance Program", "Partner Portal"]
    },
    {
      title: "About Us",
      items: ["Company", "Leadership", "Careers", "Contact"]
    }
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Top Navigation Section */}
      <div className="px-6 py-3 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          <div className="flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-primary text-sm transition-colors"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Customer Stories
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-primary text-sm transition-colors"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Newsroom
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-primary text-sm transition-colors"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Events
            </a>
            
            <Button 
              size="sm"
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm transition-colors"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Let's talk
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation Section with Logo and Dropdowns */}
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on Left */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Infocepts Data & AI" 
              className="h-10 w-auto"
            />
          </div>

          {/* Main Navigation Dropdowns */}
          <div className="flex items-center space-x-6">
            {mainNavItems.map((navItem, index) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary text-sm px-3 py-2 h-auto bg-transparent border-none cursor-pointer transition-colors">
                  <span style={{ fontFamily: 'Open Sans, sans-serif' }}>{navItem.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {navItem.items.map((item, itemIndex) => (
                    <DropdownMenuItem key={itemIndex} className="cursor-pointer">
                      <span 
                        className="text-sm text-gray-700 hover:text-primary"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        {item}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Search Icon on Right */}
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}