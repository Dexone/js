async function axiosTest() {
    const res = await axios.get(`https://dexone.ru/backend_shop/products`)

return res
}


console.log(axiosTest().then((value) => {
console.log(value);
}))





