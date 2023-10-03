<script>
	import { onMount } from "svelte";
    // @ts-ignore
    const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))
        // @ts-ignore
        /**
	 * @type {number}
	 */
        let index=0;
            /**
	 * @type {string}
	 */
            let src;
                /**
	 * @type {string}
	 */
                let alt;
    let imageList = [
            {src:"/MelDolceGabbanaCafe.jpg", alt:"Melissa wearing a mustard yellow skirt, sitting at an outdoor table of an Italian cafe"}, {src:"/MelPaulCannes.jpg", alt:"Melissa and Paul taking a selfie at a beach in Cannes"}, {src:"/JessieStretchBed.jpg", alt:"tuxedo cat Jessie laying in bed on her back stretched out"}
];
        onMount(() => {
                        async function changeImage() {
                        // @ts-ignore
                        for(let index in imageList) {
                                src = imageList[index].src;
                                        alt = imageList[index].alt;
                                        await sleep(3000);
                        }
                        changeImage();                   
            }
                changeImage();
    })
</script>
<div id="AboutMe">
<div id="SlideShow">
        <img src={src} alt={alt}>
</div>
<section id="AboutMeText">
    <h1>Learn more about me</h1>
        <p>Hi everyone! My name is Melissa Geoghegan.</p>
        <p>I've been crocheting since I was about 8 years old. I gained an interest in crocheting after seeing my grandmother crochet and knit. I has always been fasicnating to me how we can turn yarn into things like clothes, accesories, plushies, and so many other possibilites. I went on to looking up videos and tutorials online to learn more. I would look up tutorials and them have to look up another tutorial to learn how to do a certain stitch.</p>
    <p>The amount of different stitches is yet another thing I love about crocheting.</p>
</section> 
</div>
<style>
    #AboutMe {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
    }
    #SlideShow {
        display: flex;
        margin: auto;
        height: 420px;
        justify-content: center;
    }
    #AboutMeText {
        margin: 2vmin 2vh 2vmin 2vh;
        text-align: justify;
    }
    img {
        display: flex;
        width: 60vmin;
        margin: auto;
        border: 10px ridge goldenrod;
    }
    @media only screen and (min-width: 768px) {
        #AboutMe {
            display: flex;
            flex-direction: row;
            width: 80%;
            height: 730px;
        }
        #SlideShow {
            height: 730px;
        }
        #AboutMeText {
        margin: 0vmin auto auto 6vmin;
        }
    }
</style>