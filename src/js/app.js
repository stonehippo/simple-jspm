import $ from 'jquery';
import flexibility from 'flexibility';

// Quick test to see if the app is loading
// console.log($('.app_container'));

const container = $('.app_container');

container.append('<div class="main"></div>');

[
    "Number #1", "middle", "last"
].forEach( (item) => {
    let el = `<p class="item">This is ${item}.</p>`;
    $('.main').append(el);
});

container.append('<div class="content"></div>');

[
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Kitty scratches couch bad kitty purr for no reason knock over christmas tree chew on cable scream at teh bath but fall asleep on the washing machine. Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet stretch tuxedo cats always looking dapper. Use lap as chair scream at teh bath where is my slave? I'm getting hungry wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again. Use lap as chair present belly, scratch hand when stroked. Fall over dead (not really but gets sypathy) why must they do that. Flop over cat snacks stand in front of the computer screen have secret plans, white cat sleeps on a black shirt sit by the fire and thinking longingly about tuna brine."
].forEach((item) => {
    let el = `<p class="lorem">${item}</p>`;
    $('.content').append(el);
});

// Polyfill the top level container for Flexbox support in IE8+
flexibility(container[0]);
