import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() {
    this.supabase = createClient(
      environment.supabase.projectUrl,
      environment.supabase.projectKey
    );
  }
  private supabase: SupabaseClient;

  async getAllRowsInTable(tableName: string) {
    let { data: requests, error } = await this.supabase
      .from(tableName)
      .select("*");
    return { data: requests, error };
  }

  async addRowToTable(tableName: string, rowData: object) {
    let { data, error } = await this.supabase
      .from(tableName)
      .insert([rowData]);
    return { data, error };
  }

  async updateRowInTable(tableName: string, rowData: object) {
    let { data, error } = await this.supabase
      .from(tableName)
      .insert([rowData]);
    return { data, error };
  }

  async deleteRowInTable(rowId: number) {
    let { data, error } = await this.supabase
      .from("requests").delete({});

    return { data, error };
  }
}
