"use server";

export async function submitCheckoutForm(formData: FormData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const condition = formData.get("condition");
  const basePriceTaka = formData.get("basePriceTaka");
  const orderTotalTaka = formData.get("orderTotalTaka");
  const orderBumpAudiobook = formData.get("orderBumpAudiobook");
  const orderBumpVideoCall = formData.get("orderBumpVideoCall");
  // Placeholder: integrate with CRM / email when ready
  console.log("checkout", {
    fullName,
    email,
    phone,
    address,
    condition,
    basePriceTaka,
    orderTotalTaka,
    orderBumpAudiobook: orderBumpAudiobook === "on",
    orderBumpVideoCall: orderBumpVideoCall === "on",
  });
}
