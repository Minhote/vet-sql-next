import { petSchema } from "@/lib/form_utils";
import { RowDataPacket } from "mysql2";

// export type Json =
//   | string
//   | number
//   | boolean
//   | null
//   | { [key: string]: Json | undefined }
//   | Json[];

// export type Database = {
//   public: {
//     Tables: {
//       appointment: {
//         Row: {
//           customer_id: number | null;
//           date: string | null;
//           id: number;
//           vet_pro_id: number | null;
//           pet_details_id: number | null;
//         };
//         Insert: {
//           customer_id?: number | null;
//           date?: string | null;
//           id?: number;
//           vet_pro_id?: number | null;
//           pet_details_id?: number | null;
//         };
//         Update: {
//           customer_id?: number | null;
//           date?: string | null;
//           id?: number;
//           vet_pro_id?: number | null;
//           pet_details_id?: number | null;
//         };
//         Relationships: [
//           {
//             foreignKeyName: "appointment_customer_id_fkey";
//             columns: ["customer_id"];
//             isOneToOne: false;
//             referencedRelation: "customer";
//             referencedColumns: ["id"];
//           },
//           {
//             foreignKeyName: "appointment_vet_pro_id_fkey";
//             columns: ["vet_pro_id"];
//             isOneToOne: false;
//             referencedRelation: "vet_pro";
//             referencedColumns: ["id"];
//           },
//         ];
//       };
//       customer: {
//         Row: {
//           id: number;
//           identification_number: string;
//           name: string;
//           password: string;
//         };
//         Insert: {
//           id?: never;
//           identification_number: string;
//           name: string;
//           password: string;
//         };
//         Update: {
//           id?: never;
//           identification_number?: string;
//           name?: string;
//           password?: string;
//         };
//         Relationships: [];
//       };
//       pet_details: {
//         Row: {
//           age: number;
//           customer_id: number;
//           id: number;
//           name: string | null;
//           pet_type_id: number;
//         };
//         Insert: {
//           age?: number;
//           customer_id: number;
//           id?: number;
//           name?: string | null;
//           pet_type_id: number;
//         };
//         Update: {
//           age?: number;
//           customer_id?: number;
//           id?: number;
//           name?: string | null;
//           pet_type_id?: number;
//         };
//         Relationships: [
//           {
//             foreignKeyName: "pet_details_customer_id_fkey";
//             columns: ["customer_id"];
//             isOneToOne: false;
//             referencedRelation: "customer";
//             referencedColumns: ["id"];
//           },
//           {
//             foreignKeyName: "pet_details_pet_type_id_fkey";
//             columns: ["pet_type_id"];
//             isOneToOne: false;
//             referencedRelation: "pet_type";
//             referencedColumns: ["id"];
//           },
//         ];
//       };
//       pet_type: {
//         Row: {
//           id: number;
//           type: string | null;
//         };
//         Insert: {
//           id?: number;
//           type?: string | null;
//         };
//         Update: {
//           id?: number;
//           type?: string | null;
//         };
//         Relationships: [];
//       };
//       pro_type: {
//         Row: {
//           id: number;
//           title: string;
//         };
//         Insert: {
//           id?: never;
//           title: string;
//         };
//         Update: {
//           id?: never;
//           title?: string;
//         };
//         Relationships: [];
//       };
//       vet_pro: {
//         Row: {
//           id: number;
//           name: string;
//           pro_type_id: number | null;
//         };
//         Insert: {
//           id?: never;
//           name: string;
//           pro_type_id?: number | null;
//         };
//         Update: {
//           id?: never;
//           name?: string;
//           pro_type_id?: number | null;
//         };
//         Relationships: [
//           {
//             foreignKeyName: "vet_pro_pro_type_id_fkey";
//             columns: ["pro_type_id"];
//             isOneToOne: false;
//             referencedRelation: "pro_type";
//             referencedColumns: ["id"];
//           },
//         ];
//       };
//     };
//     Views: {
//       [_ in never]: never;
//     };
//     Functions: {
//       [_ in never]: never;
//     };
//     Enums: {
//       [_ in never]: never;
//     };
//     CompositeTypes: {
//       [_ in never]: never;
//     };
//   };
// };

// type PublicSchema = Database[Extract<keyof Database, "public">];

// export type Tables<
//   PublicTableNameOrOptions extends
//     | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
//     | { schema: keyof Database },
//   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//     ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
//         Database[PublicTableNameOrOptions["schema"]]["Views"])
//     : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//   ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
//       Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
//       Row: infer R;
//     }
//     ? R
//     : never
//   : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
//         PublicSchema["Views"])
//     ? (PublicSchema["Tables"] &
//         PublicSchema["Views"])[PublicTableNameOrOptions] extends {
//         Row: infer R;
//       }
//       ? R
//       : never
//     : never;

// export type TablesInsert<
//   PublicTableNameOrOptions extends
//     | keyof PublicSchema["Tables"]
//     | { schema: keyof Database },
//   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//     ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
//     : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
//       Insert: infer I;
//     }
//     ? I
//     : never
//   : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
//     ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
//         Insert: infer I;
//       }
//       ? I
//       : never
//     : never;

// export type TablesUpdate<
//   PublicTableNameOrOptions extends
//     | keyof PublicSchema["Tables"]
//     | { schema: keyof Database },
//   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//     ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
//     : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
//       Update: infer U;
//     }
//     ? U
//     : never
//   : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
//     ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
//         Update: infer U;
//       }
//       ? U
//       : never
//     : never;

// export type Enums<
//   PublicEnumNameOrOptions extends
//     | keyof PublicSchema["Enums"]
//     | { schema: keyof Database },
//   EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
//     ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
//     : never = never,
// > = PublicEnumNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
//   : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
//     ? PublicSchema["Enums"][PublicEnumNameOrOptions]
//     : never;

export interface RegisterCardProps {
  type: "submit" | "login";
}

interface UserData extends RowDataPacket {
  name: string;
  id: number;
  password: string;
}

export type loginData = {
  username: string;
  password: string;
};

export type RegisterFormData = {
  username: string;
  password: string;
  id: string;
};

export type getSessionResponse = {
  user: { username: string; id: string };
  expires: string;
  iat: number;
  exp: number;
};

export interface customerResponse extends RowDataPacket {
  customer_name: string;
  pet_details:
    | {
        pet_name: string;
        pet_type: string;
        pet_age: string;
        pet_id: string;
      }[]
    | null;
  appointment_details:
    | {
        pet_name: string;
        pet_type: string;
        vet_pro_name: string;
        vet_pro_type: string;
        appointment_date: string;
      }[]
    | null;
}

export interface vetsResponse extends RowDataPacket {
  vet_name: string;
  vet_pro_type: string;
}

export interface idResponse extends RowDataPacket {
  id: number;
}

export interface addPetProps extends petSchema {
  id: string;
}

export interface addAppointmentProps {
  vet_pro: string;
  pet_name: string;
  appointment_date: string;
  id: string;
}

export interface IdObjectResponse
  extends RowDataPacket,
    Record<string, number> {}
