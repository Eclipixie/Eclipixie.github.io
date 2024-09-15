function SwapImg(addr, img1, img2) {
    if ($(addr).attr("src") == img1) {
        $(addr).attr("src", img2);
    }
    else {
        $(addr).attr("src", img1);
    }
}