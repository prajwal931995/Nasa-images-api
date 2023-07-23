export const getLinkArray = (data) => {
    let productDetails = []
    data.map((item) =>
        productDetails.push(item.links)
    )
    return productDetails
}

export const getImagesLink = (linkData) => {
    let imageLinks = []
    let filteredImages = []
    linkData?.map((item) => {
        return imageLinks.push(item)
    })

    imageLinks?.filter((item) => {
        if (item?.length === 1) {
            const [itemObj] = item
            const itemObjValue = {
                'href': itemObj['href'],
                'rel': itemObj['rel'],
                'render': itemObj['render']
            }
            filteredImages.push(itemObjValue)
        } else {
            item?.map((itm) => {
                return filteredImages.push(itm)
            })
        }
        return filteredImages
    })

    const finalArrImages = filteredImages?.filter(
        (img) => img.render === 'image'
    )
    return finalArrImages
}