import data from '@/data/projects.json';

export function getProjectsWithTags(tags: string[]): typeof import('@/data/projects.json') {
  if (tags.length === 0 || tags.includes('All')) {
    return data;
  }
  return data.filter((project) => tags.every((tag) => project.tags.includes(tag)));
}
