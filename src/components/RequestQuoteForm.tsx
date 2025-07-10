import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface RequestQuoteFormProps {
  productName?: string;
  onSuccess?: () => void;
}

const categories = [
  "Panel Saws",
  "Edge Banders",
  "CNC Routers",
  "Boring Machines",
  "Moulders",
  "Sanders",
  "Multiple Machines",
  "Other"
];

const productionVolumes = [
  { value: "small", label: "Small (1-10 pieces/day)" },
  { value: "medium", label: "Medium (10-50 pieces/day)" },
  { value: "large", label: "Large (50+ pieces/day)" },
  { value: "industrial", label: "Industrial Scale" }
];

export default function RequestQuoteForm({ productName, onSuccess }: RequestQuoteFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    machineCategory: productName || "",
    productionVolume: "",
    projectDetails: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-industrial-dark">First Name *</label>
          <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Your first name" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-industrial-dark">Last Name *</label>
          <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Your last name" required />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-industrial-dark">Business Email *</label>
        <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your.email@company.com" required />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-industrial-dark">Phone *</label>
        <Input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+961 XX XXX XXX" required />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-industrial-dark">Company Name *</label>
        <Input name="company" value={form.company} onChange={handleChange} placeholder="Your company name" required />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-industrial-dark">Machine Category</label>
        <Select value={form.machineCategory} onValueChange={val => setForm(f => ({ ...f, machineCategory: val }))}>
          <SelectTrigger>
            <SelectValue placeholder="Select machinery type" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-industrial-dark">Production Volume</label>
        <Select value={form.productionVolume} onValueChange={val => setForm(f => ({ ...f, productionVolume: val }))}>
          <SelectTrigger>
            <SelectValue placeholder="Select production volume" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {productionVolumes.map(vol => (
              <SelectItem key={vol.value} value={vol.value}>{vol.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-industrial-dark">Project Details *</label>
        <Textarea 
          name="projectDetails"
          value={form.projectDetails}
          onChange={handleChange}
          placeholder="Describe your requirements, timeline, and any specific needs..."
          rows={4}
          required
        />
      </div>
      <Button className="w-full bg-italian-green hover:bg-italian-green/90" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Request Quote"}
      </Button>
      {success && <div className="text-green-600 text-center font-medium">Thank you! Your request has been submitted.</div>}
    </form>
  );
} 