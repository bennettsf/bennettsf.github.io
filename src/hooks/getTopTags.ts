import data from '@/data/projects.json';

export function getTopTags(topNum = 8): string[] {
  const tagCount: Record<string, number> = {};
  data.forEach((project) => {
    project.tags.forEach((tag: string) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  const sortedTags = Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topNum)
    .map(([tag]) => tag);
  return sortedTags;
}
