import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export type FoodCategory = "Veg" | "Non-Veg" | "Drinks";

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: FoodCategory;
  image: string;
};

export type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const menuItems: MenuItem[] = [
  { id: 1, name: "Margherita Pizza", price: 249, category: "Veg", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80" },
  { id: 2, name: "Chicken Burger", price: 179, category: "Non-Veg", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "Paneer Biryani", price: 229, category: "Veg", image: "https://images.unsplash.com/photo-1701579231349-d7459c9f6ecf?auto=format&fit=crop&w=900&q=80" },
  { id: 4, name: "Chicken Biryani", price: 279, category: "Non-Veg", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80" },
  { id: 5, name: "Cold Coffee", price: 129, category: "Drinks", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80" },
  { id: 6, name: "Mojito Lime", price: 119, category: "Drinks", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80" },
];

type QuickBiteContextValue = {
  isAuthenticated: boolean;
  userEmail: string;
  menuItems: MenuItem[];
  orders: OrderItem[];
  login: (email: string) => void;
  logout: () => void;
  addOrder: (item: MenuItem) => void;
};

const QuickBiteContext = createContext<QuickBiteContextValue | undefined>(undefined);

export const QuickBiteProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const login = (email: string) => {
    setIsAuthenticated(true);
    setUserEmail(email);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserEmail("");
    setOrders([]);
  };

  const addOrder = (item: MenuItem) => {
    setOrders((current) => {
      const existing = current.find((order) => order.id === item.id);
      if (existing) {
        return current.map((order) =>
          order.id === item.id ? { ...order, quantity: order.quantity + 1 } : order,
        );
      }
      return [...current, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      userEmail,
      menuItems,
      orders,
      login,
      logout,
      addOrder,
    }),
    [isAuthenticated, userEmail, orders],
  );

  return <QuickBiteContext.Provider value={value}>{children}</QuickBiteContext.Provider>;
};

export const useQuickBite = () => {
  const context = useContext(QuickBiteContext);
  if (!context) {
    throw new Error("useQuickBite must be used within QuickBiteProvider");
  }
  return context;
};
