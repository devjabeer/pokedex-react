import { Masonry } from "@mui/lab";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AbilitiesCard from "../components/details/AbilitiesCard";
import DescCard from "../components/details/DescCard";
import MoveCard from "../components/details/MoveCard";
import PhotoCard from "../components/details/PhotoCard";
import StatsCard from "../components/details/StatsCard";
import Loading from "../components/Loading";
import { fetchPokemonById } from "../store/detailsSlice";
import { titleCase } from "../utilities";

function PokemonDetails() {
  const { id } = useParams();

  const { loading, pokemon } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonById(id));
  }, []);

  const getSprites = () => {
    const sprites = [];
    function extract(obj) {
      for (const key in obj) {
        if (key === "other") {
          continue;
        }
        if (obj[key] && typeof obj[key] === "string") {
          sprites.push(obj[key]);
        } else {
          extract(obj[key]);
        }
      }
    }
    extract(pokemon.sprites);
    return sprites;
  };

  const getDesc = () => {
    return pokemon.species.data.form_descriptions.length > 0
      ? pokemon.species.data.form_descriptions.filter(
          (e) => e.language.name === "en"
        )[0].description
      : "";
  };
  const getFlavorText = () => {
    return pokemon.species.data.flavor_text_entries
      .filter((e) => e.language.name === "en")
      .map((e) => {
        return { version: titleCase(e.version.name), text: e.flavor_text };
      });
  };

  const getStats = () => {
    const { order, base_experience, height, weight, stats } = pokemon;

    return [
      [
        "Order",
        order,
        "Order for sorting. Almost national order, except families are grouped together.",
      ],
      [
        "Base Experience",
        base_experience,
        "The base experience gained for defeating this Pokémon.",
      ],
      ["Height", height, "The height of this Pokémon in decimetres."],
      ["Weight", weight, "The weight of this Pokémon in hectograms."],
      [
        "HP",
        stats[0].base_stat,
        "Hit Points (HP) show how healthy a Pokémon is, indicating how much damage it can take before it faints. As a Pokémon levels up, it usually gains HP.",
      ],
      [
        "Attack",
        stats[1].base_stat,
        "The Attack stat determines how powerful a Pokémon's physical moves will be.",
      ],
      [
        "Defence",
        stats[2].base_stat,
        "The Defense stat determines how well a Pokémon can defend against physical moves.",
      ],
      [
        "Special Attack",
        stats[3].base_stat,
        "The Special Attack stat determines how powerful a Pokémon's special moves will be.",
      ],
      [
        "Special Defence",
        stats[4].base_stat,
        "The Special Defense stat determines how well a Pokémon can defend against special moves.",
      ],
      [
        "Speed",
        stats[5].base_stat,
        "The Speed stat decides which Pokémon acts first in battle.",
      ],
    ];
  };
  const getSpeciesInfo = () => {
    const {
      color,
      egg_groups,
      forms_switchable,
      genera,
      generation,
      growth_rate,
      habitat,
      has_gender_differences,
      is_baby,
      is_legendary,
      is_mythical,
      shape,
    } = pokemon.species.data;
    return [
      ["Color", titleCase(color.name), "The color of this Pokémon."],
      ["Shape", titleCase(shape.name), "The shape of this Pokémon."],
      [
        "Egg Groups",
        egg_groups.map((e) => e.name[0].toUpperCase()).join(" | "),
        `A list of egg groups this Pokémon species is a member of. \n${egg_groups
          .map((e) => e.name[0].toUpperCase() + ": " + titleCase(e.name))
          .join(" | ")}`,
      ],
      [
        "Switchable?",
        titleCase(forms_switchable.toString()),
        "Whether or not this Pokémon has multiple forms and can switch between them.",
      ],
      [
        "Genus",
        genera.filter((e) => e.language.name === "en")[0].genus,
        "The genus of this Pokémon species.",
      ],
      [
        "Generation",
        generation.name.substring(11).toUpperCase(),
        "The generation this Pokémon species was introduced in.",
      ],
      [
        "Growth Rate",
        titleCase(growth_rate.name),
        "The rate at which this Pokémon species gains levels.",
      ],
      [
        "Habitat",
        titleCase(habitat.name),
        "The habitat this Pokémon species can be encountered in.",
      ],
      [
        "Gender Differences?",
        titleCase(has_gender_differences.toString()),
        "Whether or not this Pokémon has visual gender differences.",
      ],
      [
        "Baby?",
        titleCase(is_baby.toString()),
        "Whether or not this is a baby Pokémon.",
      ],
      [
        "Legendary?",
        titleCase(is_legendary.toString()),
        "Whether or not this is a legendary Pokémon.",
      ],
      [
        "Mythical?",
        titleCase(is_mythical.toString()),
        "Whether or not this is a mythical Pokémon.",
      ],
    ];
  };
  const getSpeciesStats = () => {
    const { order, base_happiness, capture_rate, gender_rate, hatch_counter } =
      pokemon.species.data;
    return [
      [
        "Order",
        order,
        "The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage.",
      ],
      [
        "Base Happiness",
        base_happiness,
        "The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon.",
      ],
      [
        "Gender Rate",
        gender_rate,
        "The chance of this Pokémon being female, in eighths; or -1 for genderless.",
      ],
      [
        "Capture Rate",
        capture_rate,
        "The base capture rate; up to 255. The higher the number, the easier the catch.",
      ],
      [
        "Hatch Counter",
        hatch_counter,
        "Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's.",
      ],
    ];
  };

  const getAbilities = () => {
    return pokemon.abilities.map((e) => {
      return {
        name: e.ability.name,
        url: e.ability.url,
        isHidden: e.is_hidden,
      };
    });
  };

  const getMoves = () => {
    return {
      count: pokemon.moves.length,
      moves: pokemon.moves.map((e) => titleCase(e.move.name)),
    };
  };

  return loading ? (
    <Loading />
  ) : (
    <Box>
      <Masonry
        columns={{ xs: 1, sm: 3, md: 4 }}
        spacing={2}
        style={{ margin: "0" }}
      >
        <PhotoCard
          src={
            pokemon.sprites.other.dream_world.front_default
              ? pokemon.sprites.other.dream_world.front_default
              : pokemon.sprites.other["official-artwork"].front_default
          }
          sprites={getSprites()}
        />
        <DescCard
          name={titleCase(pokemon.name)}
          species={titleCase(pokemon.species.name)}
          desc={getDesc()}
          flavorText={getFlavorText()}
          types={pokemon.types.map((e) => e.type.name)}
        />
        <StatsCard stats={getSpeciesInfo()} title="Species Info" />
        <StatsCard stats={getSpeciesStats()} title="Species Stats" />
        <StatsCard stats={getStats()} title="Pokemon Stats" />
        <AbilitiesCard abilities={getAbilities()} />
        <MoveCard moves={getMoves()} />
      </Masonry>
    </Box>
  );
}
export default PokemonDetails;
