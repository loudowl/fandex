# Design Brief: Fandex

## Visual Identity

### Color Palette
- **Primary Colors**
  - Electric Blue: `#007BFF`
  - Deep Purple: `#6F42C1`
- **Secondary Colors**
  - Light Grey: `#F8F9FA`
  - Dark Grey: `#343A40`
- **Accent Colors**
  - Bright Orange: `#FD7E14`
  - Lime Green: `#28A745`
- **Background Colors**
  - White: `#FFFFFF`
  - Dark Mode Background: `#212529`
- **Text Colors**
  - Primary Text: `#212529` (Dark Mode: `#F8F9FA`)
  - Secondary Text: `#6C757D`

### Mood/Tone
The mood of Fandex should be modern and dynamic, with a focus on accessibility and user engagement. The tone should be friendly and approachable, fitting the entertainment-first approach. Use vibrant colors to highlight important data points and maintain a clean, professional aesthetic.

## Typography

### Fonts
- **Heading Font**: "Poppins", sans-serif
  - Weights: 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Body Font**: "Roboto", sans-serif
  - Weights: 400 (Regular), 500 (Medium)

### Sizes
- **Headings**
  - H1: 32px
  - H2: 24px
  - H3: 18px
- **Body Text**
  - Regular: 16px
  - Small: 14px

## Component Library

### UI Components
1. **Market Card**
   - **Description**: Displays market title, YES probability, 24h probability change, total volume, category tag.
   - **Visual**: Card with rounded corners, shadow effect, and color-coded probability change (green for positive, red for negative).

2. **Portfolio Item**
   - **Description**: Shows entry price, current price, hypothetical P&L.
   - **Visual**: Compact card with clear data separation, uses accent colors to highlight P&L status.

3. **AI Summary Box**
   - **Description**: Contains GPT-4o mini-generated market mover explanation.
   - **Visual**: Simple text box with background color to differentiate from other data.

4. **Navigation Bar**
   - **Description**: Bottom navigation with icons for Home, Portfolio, Alerts, Settings.
   - **Visual**: Minimalistic, uses primary colors for active state.

5. **Alert Modal**
   - **Description**: Popup for setting price alerts.
   - **Visual**: Centered modal with input fields and confirm/cancel buttons.

## Key Screen Layouts

### Home Screen
- **Layout**: Vertical scroll FlatList of Market Cards, infinite scroll.
- **Positioning**: Navigation bar at the bottom, search bar at the top.

### Market Detail Screen
- **Layout**: Market Card header, probability chart below, AI Summary Box at the bottom.
- **Positioning**: Swipeable between detail screens.

### Portfolio Screen
- **Layout**: Grid of Portfolio Items.
- **Positioning**: Integrated with quick filter options at the top.

### Onboarding Screen
- **Layout**: Step-by-step interest selection, large buttons for category choices.
- **Positioning**: Progress indicator at the top.

## Responsive Strategy

### Breakpoints
- **Mobile**: Up to 600px
- **Tablet**: 601px to 1024px
- **Desktop**: 1025px and above

Design is primarily mobile-first, with tablet and desktop layouts adapting to use more horizontal space and potentially displaying multiple market cards side-by-side.

## Micro-interactions

- **Swipe Animation**: Smooth vertical swipe transition between market cards.
- **Button Presses**: Subtle scale effect on button press.
- **Alert Notifications**: Slide-in from the top for push notifications.
- **Loading Indicators**: Spinning wheel with primary color during data fetch.

## Accessibility

### WCAG Considerations
- **Contrast Ratios**: Ensure text and background colors meet at least a 4.5:1 contrast ratio.
- **Text Size**: Maintain minimum text size of 14px for readability.
- **Keyboard Navigation**: Fully navigable interface using keyboard shortcuts.
- **ARIA Labels**: Use ARIA attributes for screen readers on interactive elements.

This design brief outlines a modern, engaging, and accessible user interface for Fandex, ensuring a seamless experience across devices while adhering to best practices in UI/UX design.