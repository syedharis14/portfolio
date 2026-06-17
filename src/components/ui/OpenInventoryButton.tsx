"use client";

import { Magnetic } from "./Magnetic";
import { Icon } from "./Icon";

/** Dispatches the global event that opens the SkillsChest inventory modal. */
export function OpenInventoryButton() {
  return (
    <Magnetic strength={0.3}>
      <button
        onClick={() => window.dispatchEvent(new Event("open-skills"))}
        className="group inline-flex shrink-0 items-center gap-2 glass voxel-edge px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-grass/60 hover:text-grass"
      >
        Open the inventory
        <Icon name="arrow-up-right" size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </Magnetic>
  );
}
