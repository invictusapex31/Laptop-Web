# Framex Design System

## Color Palette

### Primary Colors
- **Deep Black**: `#0a0a0a` - Main backgrounds
- **Charcoal**: `#1f1f1f` - Cards, containers, sidebars
- **Aluminum Gray**: `#4a4a4a` - Component housings, hover states
- **Pure White**: `#ffffff` - Primary text, highlights

### Accent Colors
- **Primary Orange**: `#ff6b35` - CTAs, selections, AI messages
- **Warning Amber**: `#ffa726` - Compatibility warnings
- **Success Green**: `#4caf50` - Confirmations, checkmarks
- **Info Blue**: `#2196f3` - Informational tags

### Neutral Grays
- Gray 100: `#f5f5f5`
- Gray 300: `#e0e0e0`
- Gray 400: `#9e9e9e`
- Gray 500: `#9e9e9e`
- Gray 700: `#616161`
- Gray 800: `#424242`
- Gray 900: `#212121`

## Typography

### Font Families
- **Headings**: Inter (weights: 600, 700, 800)
- **Body**: Inter (weights: 400, 500)
- **Technical/Specs**: JetBrains Mono (monospace, 400, 500)

### Font Sizes
- Hero: 72px (desktop), 48px (mobile)
- Section Title: 48px
- Subsection: 32px
- Card Title: 24px
- Body: 16px
- Small: 14px
- Caption: 12px

## Components

### Buttons
- **Primary**: Orange background, white text, elevated shadow
- **Secondary**: Charcoal background, white text, border
- **Outline**: Transparent with orange border

### Cards
- Background: Charcoal (#1f1f1f)
- Border: Gray 800 (#424242)
- Hover: Border changes to gray 700
- Selected: Border changes to primary orange

### Inputs
- Background: Deep black (#0a0a0a)
- Border: Gray 700 (#616161)
- Focus: Primary orange border
- Text: White
- Placeholder: Gray 500

## 3D Materials

### Laptop Body
- **Metalness**: 0.9
- **Roughness**: 0.4
- **Environment Map Intensity**: 1.5
- Colors: Space Gray (#4a4a4a), Silver (#c0c0c0), Midnight Black (#0a0a0a)

### Screen
- **Emissive**: Primary orange (#ff6b35)
- **Emissive Intensity**: 0.3
- **Roughness**: 0.1

### Keyboard
- Background: Deep black (#0a0a0a)
- Keys: Charcoal (#1a1a1a)
- **Roughness**: 0.5-0.6

### Internal Components
- RAM: Green (#00aa00) with gold contacts
- SSD: Dark with blue chip (#0066cc)
- Battery: Orange (#ff6b35)
- CPU: Dark gray with metallic finish

## Animations

### Timing
- Page transitions: 300ms ease-in-out
- Component swaps: 500ms with cross-fade
- Button hovers: 200ms
- AI typing: 800ms delay

### Effects
- Hover: Scale 1.02, subtle shadow increase
- Tap: Scale 0.98
- Lid animation: 2 seconds smooth rotation
- Exploded view: 2 seconds staggered separation

## Spacing

- Container padding: 24px (1.5rem)
- Card padding: 16px (1rem)
- Section margin: 128px (8rem)
- Component gap: 12px (0.75rem)

## Shadows

- **Elevated**: `0 20px 60px rgba(0, 0, 0, 0.3)`
- **Card**: `0 4px 20px rgba(0, 0, 0, 0.1)`
- **Hover**: Increase shadow intensity by 20%

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1920px

## Accessibility

- Focus indicators: 2px orange outline
- Keyboard navigation: Full support
- ARIA labels: All interactive elements
- Screen reader: Announcements for AI responses
- Contrast ratio: WCAG AA compliant
