import { EnumType } from 'typescript'

export default interface ProfileDetailsProps {
    children?: JSX.Element[] | JSX.Element
}

enum Sex {
    Male,
    Female,
}

enum Orientation {
    Straight,
    Lesbian,
    Gay,
    BiSexual,
}

enum BodyType {
    Extra,
    Average,
    Fit,
    Jacked,
    Overweight,
    Thin,
    Curvy,
    FullFigured,
}

enum Ethnicity {
    Asian,
    Black,
    Latin,
    MiddleEastern,
    NativeAmerican,
    PacificIslander,
    White,
    Other,
}

enum Education {
    Bachelors,
    HighSchoolDiploma,
    SchoolOfHardKnox,
    Masters,
    PhD,
    Trade,
    Attending,
}

enum Work {
    FullTime,
    PartTime,
    Freelance,
    SelfEmployed,
    Unemployed,
    Retired,
    TakingABreak,
}

enum Connections {
    Friendship,
    ShortTerm,
    LongTerm,
    Hookups,
}

enum Religion {
    Agnostic,
    Atheist,
    Christian,
    Jewish,
    Catholic,
    Islamic,
    Hindu,
    Buddhist,
    Other,
}

enum ZodiacSign {
    Aquarius,
    Pisces,
    Aries,
    Taurus,
    Gemini,
    Cancer,
    Leo,
    Virgo,
    Libra,
    Scorpio,
    Sagittarius,
    Capricorn,
}

interface LifeStyle {
    Alcohol: Alcohol
    Smoking: Smoking
    Marijuana: Marijuana
    Diet: Diet
    Family: Family
}

enum Alcohol {
    Often,
    Sometimes,
    Never,
}

enum Smoking {
    Often,
    Sometimes,
    Never,
}

enum Marijuana {
    Often,
    Sometimes,
    Never,
}

enum Diet {
    Omnivore,
    Vegetarian,
    Vegan,
    Pescatarian,
    Kosher,
    Halal,
    IntermittantFasting,
    Keto,
    GlutenFree,
}

interface Family {
    Pets: Pets
    Kids: Kids
    Future: Future
}

enum Pets {
    None,
    Other,
    Cats,
    Dogs,
}

enum Kids {
    Has,
    HasNone,
}

enum Future {
    Maybe,
    Wants,
    DoesNotWant,
}
