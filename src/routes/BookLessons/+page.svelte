<script>
    import { browser } from "$app/environment";
    import intlTelInput from 'intl-tel-input';
	import { onMount } from "svelte";

        onMount(() => {
    const input = document.querySelector("#PhoneNumber");
    intlTelInput(input, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
        customContainer: "PhoneNumber",
        initialCountry: "auto",
        // @ts-ignore
        geoIpLookup: function(callback) {
        fetch("https://ipapi.co/json")
        .then(function(res) { return res.json(); })
        .then(function(data) { callback(data.country_code); })
        .catch(function() { callback("us"); });
}});
});
</script>
<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/css/intlTelInput.css">
</svelte:head>
<div id="booking">
    <form id="contact">
        <fieldset id="ContactForm">
            <legend>Please fill out your details <br> and I'll get back to you ASAP</legend>
                <i class="fa-solid fa-id-card" style="color: #daa520;"></i>
                <label for="FirstName">First Name</label>
                <input type="text" id="FirstName" autocomplete="given-name"><br>
                <i class="fa-solid fa-id-card" style="color: #daa520;"></i>
                <label for="LastName">Last Name</label>
                <input type="text" id="LastName" autocomplete="family-name"><br>
                <i class="fa-solid fa-mobile-screen-button" style="color: #daa520;"></i>
                <label for="PhoneNumber">Phone Number</label>
                <input type="tel" id="PhoneNumber" autocomplete="tel">
<br>
                <i class="fa-regular fa-envelope" style="color: #daa520;"></i>
                <label for="email">Email</label>
                <input type="email" id="email" autocomplete="email">
        </fieldset>
        <br>
        <fieldset id="ContactMethod">
            <legend>Preferred method of contact</legend>
                <i class="fa-regular fa-envelope" style="color: #daa520;"></i>
                <label for="EmailCheckbox">Email</label>
                <input type="checkbox" id="EmailCheckbox">
                <i class="fa-brands fa-whatsapp" style="color: #daa520;"></i>
                <label for="WhatsAppCheckbox">WhatsApp</label>
                <input type="checkbox" id="WhatsAppCheckbox">
        </fieldset>
    </form>
    <div class="calendly-inline-widget" data-url="https://calendly.com/melissageoghegan95?hide_gdpr_banner=1&primary_color=daa520" style="min-width:320px;height:505px;">
    </div>
</div>
{#if browser}
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async>   </script>
{/if}

<style>
    #booking {
        display: flex;
        flex-direction: column;
    }
    @media only screen and (min-width: 768px) {
        #booking {
            display: flex;
            flex-direction: row;
        }
    }
</style>