enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];

console.log("membership", membership);
console.log("membershipReverse", membershipReverse);

enum SocialMedia {
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM',
    TWITTER = 'TWITTER'
}

const social = SocialMedia.INSTAGRAM;
console.log("social", social);
