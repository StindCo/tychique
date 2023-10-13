import api from "./../plugins/restApi";
import * as SecureStore from "expo-secure-store";
import CustomToast from "../components/CustomToast";
import storage from "../plugins/Storage";

export const getCategories = () => {
  return api.get("/categories");
};

export const registerNewEmployee = async (data) => {
  let response = api.post("/employees?account_ref=0", { ...data });

  await response.catch((error) => console.log(error));

  let responseValided = (await response).data;

  let status = (await response).status;

  if (responseValided.error_type == "username-exist") {
    CustomToast("Il existe un compte avec ce numéro de téléphone !");
    return false;
  }

  if (status != 400 && status != 201) {
    CustomToast("Une erreur s'est produite, Veillez recommencer ! ");
    return false;
  }

  await SecureStore.setItemAsync("profileID", `${responseValided.data.id}`);

  await SecureStore.setItemAsync(
    "typeProfile",
    `${responseValided.data.account.privilegeNumber}`
  );

  let profileID = await SecureStore.getItemAsync("profileID");

  return true;
};


export const registerNewEmployer = async (data) => {
    let response = api.post("/employers?account_ref=0", { ...data });
  
    await response.catch((error) => console.log(error));
  
    let responseValided = (await response).data;
  
    let status = (await response).status;
  
    if (responseValided.error_type == "username-exist") {
      CustomToast("Il existe un compte avec ce numéro de téléphone !");
      return false;
    }
  
    if (status != 400 && status != 201) {
      CustomToast("Une erreur s'est produite, Veillez recommencer ! ");
      return false;
    }
  
    await SecureStore.setItemAsync("profileID", `${responseValided.data.id}`);
  
    await SecureStore.setItemAsync(
      "typeProfile",
      `${responseValided.data.account.privilegeNumber}`
    );
  
    let profileID = await SecureStore.getItemAsync("profileID");
  
    return true;
  };
  