# MOF-musion-homepage
Task for MOF - create homepage for Musion

=============================
Notes
=============================

Responsive Design:
I decided on two breakpoints for this design: (min-width: 533px) and (min-width: 1370px) to ensure that the design works for both phones and very large monitors.
I decided not to use the background image for small screen sizes i.e. mobile devices to speed up page loading in case of a slow network connection. 
For mobile I switched the main navigation bar from a vertical to horizontal display. I left the navigation expanded rather than applying a hamburger menu for two reasons:
	1. Not everyone immediately recognises the hamburger menu button as actionable
	2. It introduces navigation friction so is therefore less efficient

CSS:
I decided to put all media queries in one stylesheet rather than several so only one HTTP request is required. I think minimising the amount of requests is the best approach because of possible slow network connections on phones.

Fonts:
The fonts used in the original design were DINCond Regular, OpenSans and Times Roman. I’ve used DINCond Regular and OpenSans in the final design but was unable to find Times Roman so used Times New Roman instead as it is a very similar font.

Image Compression:
I compressed the background image as it was a very large file. The file size went from 411KB to 278KB. I checked on Photoshop that this compression didn’t lead to a noticeable effect on image quality. 

Interactivity:
As this is a clean, simple design I have not added much interactivity. 
I have added a transition on the navigation bar items and a small animation on the main button.
