(async ()=>{

    // 1 create
    console.log("1. addItem()");
    const newItem = {
        title: "patitas de pollo",
        description: "lalalalala",
        qty: 1,
        tags: [
            "frizatta",
            "bed-friendly",
            "caliente"
        ]
    };
    console.log("  -> item:", addItem(newItem));

    // 2. getItems
    console.log("2. getItems()");
    let items = await getItems();
    console.log(items);

    // getItem
    console.log("3. getItem()");
    console.log('  -> ', await getItem(items[0]));


    // 3. updateItem
    console.log("3. getItems()");
    const updItem = items[0];
    updItem.description = "updated description";

    await updateItem(updItem);
    items = await getItems();
    console.log(items);

    // 4. delItem
    console.log("4. delItem()");
    await delItem(items[0]);
    items = await getItems();
    console.log(items);

///////////////////////////////////////////////////////////////////////////////////

    console.log("---- tags ----");
    console.log("getTagsList -> ", await getTagsList());

    const filter_a = ["bed-friendly"];
    const filter_b = ["bed-friendly", "frizatta"];
    
    console.log("getItemsByTags (single) -> ", await getItemsByTags(filter_a));
    console.log("getItemsByTags (multiple) -> ", await getItemsByTags(filter_b));



})();