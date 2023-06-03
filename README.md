# OPCraft w/ MUD v2

This is a port of [OPCraft](https://github.com/latticexyz/opcraft) to MUD V2.

### Port Notes

Not everything is ported over, in particular:
- plugins
- staking / claiming land
- crafting, recipes
- creative mode
- The component browser (the sidebar that appears when you press `~`. This wasn't ported since MUD2 has a much nicer "component browser")

There is a patch to MUD because of a bug, which can be removed once [this PR](https://github.com/latticexyz/mud/pull/989) is merged in.

### Running locally

1. Run `pnpm install` to install dependencies
2. Run `pnpm run dev` in the top directory

