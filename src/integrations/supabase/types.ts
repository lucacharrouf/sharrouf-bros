export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      currencies: {
        Row: {
          currency_code: string
          currency_name: string | null
        }
        Insert: {
          currency_code: string
          currency_name?: string | null
        }
        Update: {
          currency_code?: string
          currency_name?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          email: string
          id: number
          name: string
          outstanding_balance: number
          phone: string | null
          total_machines_purchased: number
          total_spent: number
          updated_at: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          email: string
          id?: number
          name: string
          outstanding_balance?: number
          phone?: string | null
          total_machines_purchased?: number
          total_spent?: number
          updated_at?: string
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          email?: string
          id?: number
          name?: string
          outstanding_balance?: number
          phone?: string | null
          total_machines_purchased?: number
          total_spent?: number
          updated_at?: string
        }
        Relationships: []
      }
      employees: {
        Row: {
          created_at: string | null
          date_hired: string
          department: string | null
          email: string | null
          employee_id: number
          first_name: string
          is_active: boolean | null
          last_name: string
          manager_id: number | null
          phone: string | null
          role: string
          salary: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date_hired: string
          department?: string | null
          email?: string | null
          employee_id?: never
          first_name: string
          is_active?: boolean | null
          last_name: string
          manager_id?: number | null
          phone?: string | null
          role: string
          salary: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date_hired?: string
          department?: string | null
          email?: string | null
          employee_id?: never
          first_name?: string
          is_active?: boolean | null
          last_name?: string
          manager_id?: number | null
          phone?: string | null
          role?: string
          salary?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["employee_id"]
          },
        ]
      }
      expense_categories: {
        Row: {
          category_id: number
          category_name: string
          description: string | null
          is_active: boolean | null
        }
        Insert: {
          category_id?: never
          category_name: string
          description?: string | null
          is_active?: boolean | null
        }
        Update: {
          category_id?: never
          category_name?: string
          description?: string | null
          is_active?: boolean | null
        }
        Relationships: []
      }
      expenses: {
        Row: {
          category: string | null
          currency_code: string
          date: string
          employee_id: number
          id: number
          price: number
          product_purchased: string
        }
        Insert: {
          category?: string | null
          currency_code: string
          date: string
          employee_id: number
          id?: number
          price: number
          product_purchased: string
        }
        Update: {
          category?: string | null
          currency_code?: string
          date?: string
          employee_id?: number
          id?: number
          price?: number
          product_purchased?: string
        }
        Relationships: [
          {
            foreignKeyName: "expenses_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["currency_code"]
          },
          {
            foreignKeyName: "expenses_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["employee_id"]
          },
        ]
      }
      machines: {
        Row: {
          brand: string
          created_at: string | null
          final_cost: number | null
          model: string | null
          notes: string | null
          purchase_currency: Database["public"]["Enums"]["currency_code"] | null
          purchase_date: string | null
          purchase_price: number | null
          sale_price: number | null
          serial_no: string
          status: Database["public"]["Enums"]["machine_status"] | null
          status_in_stock: string | null
          transport_costs: number | null
          year: string | null
        }
        Insert: {
          brand: string
          created_at?: string | null
          final_cost?: number | null
          model?: string | null
          notes?: string | null
          purchase_currency?:
            | Database["public"]["Enums"]["currency_code"]
            | null
          purchase_date?: string | null
          purchase_price?: number | null
          sale_price?: number | null
          serial_no: string
          status?: Database["public"]["Enums"]["machine_status"] | null
          status_in_stock?: string | null
          transport_costs?: number | null
          year?: string | null
        }
        Update: {
          brand?: string
          created_at?: string | null
          final_cost?: number | null
          model?: string | null
          notes?: string | null
          purchase_currency?:
            | Database["public"]["Enums"]["currency_code"]
            | null
          purchase_date?: string | null
          purchase_price?: number | null
          sale_price?: number | null
          serial_no?: string
          status?: Database["public"]["Enums"]["machine_status"] | null
          status_in_stock?: string | null
          transport_costs?: number | null
          year?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          created_at: string
          id: number
          notes: string | null
          payment_amount: number
          payment_date: string
          payment_method: Database["public"]["Enums"]["payment_method"]
          sale_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          notes?: string | null
          payment_amount: number
          payment_date?: string
          payment_method: Database["public"]["Enums"]["payment_method"]
          sale_id: number
        }
        Update: {
          created_at?: string
          id?: number
          notes?: string | null
          payment_amount?: number
          payment_date?: string
          payment_method?: Database["public"]["Enums"]["payment_method"]
          sale_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "payments_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales_detail"
            referencedColumns: ["id"]
          },
        ]
      }
      sales: {
        Row: {
          amount_paid: number
          amount_remaining: number
          created_at: string
          currency: Database["public"]["Enums"]["currency_code"] | null
          customer_id: number
          down_payment: number
          id: number
          installment_day: number | null
          machine_serial: string
          next_payment_due: string | null
          notes: string | null
          number_of_installments: number | null
          payment_type: Database["public"]["Enums"]["payment_method"]
          reminder_sent_at: string | null
          sale_date: string
          sale_price: number
          updated_at: string
          whatsapp_reminder_sent: boolean | null
        }
        Insert: {
          amount_paid?: number
          amount_remaining: number
          created_at?: string
          currency?: Database["public"]["Enums"]["currency_code"] | null
          customer_id: number
          down_payment?: number
          id?: number
          installment_day?: number | null
          machine_serial: string
          next_payment_due?: string | null
          notes?: string | null
          number_of_installments?: number | null
          payment_type: Database["public"]["Enums"]["payment_method"]
          reminder_sent_at?: string | null
          sale_date?: string
          sale_price: number
          updated_at?: string
          whatsapp_reminder_sent?: boolean | null
        }
        Update: {
          amount_paid?: number
          amount_remaining?: number
          created_at?: string
          currency?: Database["public"]["Enums"]["currency_code"] | null
          customer_id?: number
          down_payment?: number
          id?: number
          installment_day?: number | null
          machine_serial?: string
          next_payment_due?: string | null
          notes?: string | null
          number_of_installments?: number | null
          payment_type?: Database["public"]["Enums"]["payment_method"]
          reminder_sent_at?: string | null
          sale_date?: string
          sale_price?: number
          updated_at?: string
          whatsapp_reminder_sent?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_machine_serial_fkey"
            columns: ["machine_serial"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["serial_no"]
          },
        ]
      }
    }
    Views: {
      payment_history: {
        Row: {
          created_at: string | null
          customer_id: number | null
          customer_name: string | null
          id: number | null
          machine_brand: string | null
          machine_model: string | null
          notes: string | null
          payment_amount: number | null
          payment_date: string | null
          payment_method: Database["public"]["Enums"]["payment_method"] | null
          sale_id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_detail: {
        Row: {
          amount_paid: number | null
          amount_remaining: number | null
          created_at: string | null
          customer_email: string | null
          customer_id: number | null
          customer_name: string | null
          down_payment: number | null
          id: number | null
          installment_day: number | null
          machine_brand: string | null
          machine_model: string | null
          machine_serial: string | null
          next_payment_due: string | null
          notes: string | null
          payment_type: Database["public"]["Enums"]["payment_method"] | null
          sale_date: string | null
          sale_price: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_machine_serial_fkey"
            columns: ["machine_serial"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["serial_no"]
          },
        ]
      }
    }
    Functions: {
      calculate_next_payment_due: {
        Args: { base_date: string; installment_day: number }
        Returns: string
      }
      quick_payment: {
        Args: {
          p_sale_id: number
          p_amount: number
          p_payment_date?: string
          p_method?: Database["public"]["Enums"]["payment_method"]
          p_notes?: string
        }
        Returns: Json
      }
    }
    Enums: {
      currency_code: "USD" | "EUR"
      expense_status: "pending" | "approved" | "rejected" | "reimbursed"
      machine_status: "new" | "refurbished"
      payment_method: "cash" | "bank_transfer" | "check" | "credit_card"
      sale_status:
        | "draft"
        | "invoiced"
        | "shipped"
        | "delivered"
        | "closed"
        | "cancelled"
      your_enum_type: "value1" | "value2" | "value3"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      currency_code: ["USD", "EUR"],
      expense_status: ["pending", "approved", "rejected", "reimbursed"],
      machine_status: ["new", "refurbished"],
      payment_method: ["cash", "bank_transfer", "check", "credit_card"],
      sale_status: [
        "draft",
        "invoiced",
        "shipped",
        "delivered",
        "closed",
        "cancelled",
      ],
      your_enum_type: ["value1", "value2", "value3"],
    },
  },
} as const
