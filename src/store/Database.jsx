import supabase from "./supabaseClient"

const insertData = async (tableName, JSONData) => {
    const { error } = await supabase
        .from(tableName)
        .insert(JSONData)
    return error;
}

const fetchData = async (tableName, key, value) => {
    const { data, error } = await supabase
            .from(tableName)
            .select()
            .eq(key,value)
    return { data, error };
}

export {insertData, fetchData};