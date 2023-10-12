import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from "@supabase/supabase-js"; 
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }
  private supabase: SupabaseClient;

  async getSubmittedReqs() {
    let { data: requests, error } = await this.supabase
      .from("requests")
      .select("*");
    return { data: requests, error };
  }

  async addRowToTable(rowData: object) {
    let { data, error } = await this.supabase
      .from("requests")
      .insert([rowData]);
    return { data, error };
  } 

  async updateRowInTable(rowData: object) {
    let { data, error } = await this.supabase
      .from("requests")
      .insert([rowData]);
    return { data, error };
  } 

  async deleteRowInTable(rowId: number) {
    let { data, error } = await this.supabase
      .from("requests").delete({});
      
    return { data, error };
  }
}
