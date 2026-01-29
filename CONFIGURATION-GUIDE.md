# Adventure bliss - Configuration Guide

This guide explains where to edit contact details and other information in the Adventure bliss website.

## 📧 Contact Information

### Contact Component (`/src/app/components/contact/contact.ts`)

**Page Content:**
- `contactInfo.pageTitle` - Contact page heading
- `contactInfo.pageSubtitle` - Contact page subtitle
- `contactInfo.formTitle` - Contact form heading
- `contactInfo.getInTouchTitle` - Contact methods section heading

**Contact Methods:**
- `contactMethods` array contains:
  - Email addresses (automatically converts @ symbols)
  - Phone numbers
  - Physical address
  - Business hours

**Form Options:**
- `tripTypes` - Available trip type options in the form
- `budgetRanges` - Budget range options in the form

**Social Media:**
- `socialLinks` - Social media platforms and URLs

**Map Information:**
- `mapInfo` - Location details and landmarks

## 🏢 Company Information

### Footer Component (`/src/app/components/footer/footer.ts`)

**Company Details:**
- `companyInfo.name` - Company name
- `companyInfo.logoPath` - Logo file path
- `companyInfo.description` - Company description
- `companyInfo.establishedYear` - Year company was founded
- `companyInfo.currentYear` - Automatically updated current year

**Navigation & Services:**
- `quickLinks` - Footer navigation links
- `services` - List of services offered

**Contact & Social:**
- `contactInfo` - Contact details in footer
- `socialLinks` - Social media links
- `legalInfo` - Copyright and legal information

### Header Component (`/src/app/components/header/header.ts`)

**Branding:**
- `companyInfo.name` - Company name for alt text
- `companyInfo.logoPath` - Header logo path

**Navigation:**
- `navigationLinks` - Main navigation menu items

## 🎯 Quick Edit Instructions

### To Change Contact Details:
1. **Email Addresses**: Edit in `contact.ts` → `contactMethods[0].details` and `footer.ts` → `contactInfo[0].text`
2. **Phone Numbers**: Edit in `contact.ts` → `contactMethods[1].details` and `footer.ts` → `contactInfo[1].text`
3. **Address**: Edit in `contact.ts` → `contactMethods[2].details` and `footer.ts` → `contactInfo[2].text`
4. **Business Hours**: Edit in `contact.ts` → `contactMethods[3].details`

### To Change Social Media Links:
1. **Contact Page**: Edit `socialLinks` array in `contact.ts`
2. **Footer**: Edit `socialLinks` array in `footer.ts`

### To Change Company Information:
1. **Company Name**: Edit `companyInfo.name` in both `header.ts` and `footer.ts`
2. **Logo**: Edit `companyInfo.logoPath` in both components
3. **Description**: Edit `companyInfo.description` in `footer.ts`

### To Add/Remove Services:
1. Edit the `services` array in `footer.ts`

### To Change Navigation:
1. **Header Menu**: Edit `navigationLinks` array in `header.ts`
2. **Footer Links**: Edit `quickLinks` array in `footer.ts`

## 📝 Example: Adding a New Contact Method

```typescript
// In contact.ts, add to contactMethods array:
{
  icon: '💬',
  title: 'Live Chat',
  details: [
    'Available 24/7',
    'Click the chat icon'
  ]
}
```

## 🔧 Form Customization

### Adding New Trip Types:
```typescript
// In contact.ts, add to tripTypes array:
{ value: 'adventure', label: 'Adventure Sports' }
```

### Adding New Budget Ranges:
```typescript
// In contact.ts, add to budgetRanges array:
{ value: 'premium', label: 'Premium (Above ₹2,00,000)' }
```

---

**Note**: After making changes, run `npm run build` or `npm start` to see your updates!