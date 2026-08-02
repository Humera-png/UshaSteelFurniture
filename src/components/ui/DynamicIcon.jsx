import {
  Warehouse,
  Store,
  Factory,
  ShoppingCart,
  Building2,
  Truck,
  Cog,
  Archive,
  ShieldCheck,
  Layers,
  Gauge,
  HelpCircle,
} from 'lucide-react';

const registry = {
  Warehouse,
  Store,
  Factory,
  ShoppingCart,
  Building2,
  Truck,
  Cog,
  Archive,
  ShieldCheck,
  Layers,
  Gauge,
};

export default function DynamicIcon({ name, ...props }) {
  const Icon = registry[name] || HelpCircle;
  return <Icon {...props} />;
}
