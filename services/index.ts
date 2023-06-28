export async function getCharacters(
  page: string,
  search: string,
  gender: string
) {
  const api = `${process.env.NEXT_PUBLIC_API}/character/?page=${page}&name=${search}&gender=${gender}`;
  try {
    const res = await fetch(api, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {

  }
}

export async function getDetailCharacter(id: string) {
  const api = `${process.env.NEXT_PUBLIC_API}/character/${id}`;
  try {
    const res = await fetch(api, {
      next: {
        revalidate: 600,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {}
}

export async function getLocations(page: string, search: string) {
  const api = `${process.env.NEXT_PUBLIC_API}/location/?page=${page}&name=${search}`;
  try {
    const res = await fetch(api, {
      next: {
        revalidate: 600,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {}
}

export async function getDetailLocation(id: string) {
  const api = `${process.env.NEXT_PUBLIC_API}/location/${id}`;
  try {
    const res = await fetch(api, {
      next: {
        revalidate: 600,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {}
}
