

// import { revalidatePath } from "next/cache";
// import { auth } from "./auth";
// import { headers } from "next/headers";

// export const UpdateForm = async (_id, formData) => {
//     "use server"

//     const updateDestination = Object.fromEntries(formData.entries());


//     const {getTokens} = await auth.api.getToken({
//             headers : await headers()
//         })

//     const token = getTokens?.token
//     console.log(token)

//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${_id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//             authorization : `Bearer ${token}`
//         },
//         body: JSON.stringify(updateDestination),
//     });

//     const data = await res.json();

//     console.log(data);

//     if (data.modifiedCount > 0) {
//         revalidatePath(`/destinations`);
//     }
// };