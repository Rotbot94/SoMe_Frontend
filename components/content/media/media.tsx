import ImageCarousel from "@/components/content/media/imageCarousel";
import React from "react";

export default function Media(props: any): JSX.Element {
    const images = props?.images ?? [
        {
            height: 400,
            width: 400,
            src: 'https://sportshub.cbsistatic.com/i/2021/03/18/b730cb44-18e2-4226-958e-566761612e6b/eva-unit-1-1210355.jpg',
            alt: 'unit01'
        },
        {
            height: 400,
            width: 400,
            src: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/musashi-vagabond-takahiko-inoue-manga-wallpaper-Cropped.jpg',
            alt: 'musashi'
        },
        {height: 1000, width: 1000, src: 'https://miro.medium.com/max/1024/0*wATbQ49jziZTyhZH.jpg', alt: 'gutss'},
        {
            height: 400,
            width: 400,
            src: 'https://animecorner.me/wp-content/uploads/2022/01/roronoza-zoro-statue-in-japan.jpg',
            alt: 'zoro'
        },
        {
            height: 400,
            width: 400,
            src: 'https://cdn.realsport101.com/images/ncavvykf/epicstream/8269cd322c94898e2e0606e61267c906839bcffc-760x400.jpg',
            alt: 'alphonse'
        },
        {
            height: 400,
            width: 400,
            src: 'https://image.cnbcfm.com/api/v1/image/107198138-16770781142023-02-22t143423z_43942611_rc2egz9u8tt7_rtrmadp_0_ukraine-crisis-putin-concert.jpeg',
            alt: 'nums'
        },

    ];

    console.log(images)

    if (images?.length > 0) {
        return (
            <>
                <div className="m-3 w-[300px] md:w-[650px] lg:w-[950px]">
                    <ImageCarousel images={images}/>
                </div>
            </>

        )
    } else {
        return (<div className="text-center m-3 w-[300px] md:w-[650px] lg:w-[950px]">No media</div>);
    }
}