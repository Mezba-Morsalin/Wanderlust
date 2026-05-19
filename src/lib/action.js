

import { revalidatePath } from "next/cache";

export const UpdateForm = async (_id, formData) => {
    "use server"

    const updateDestination = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateDestination),
    });

    const data = await res.json();

    console.log(data);

    if (data.modifiedCount > 0) {
        revalidatePath(`/destinations`);
    }
};