import {createClient} from 'next-sanity'
import {apiVersion, projectId, dataset, studioUrl, revalidateSecret} from './api'

export const client = createClient({
  apiVersion,
  projectId,
  dataset,
  useCdn: revalidateSecret ? false : true,
  perspective: 'published',
  stega: {
    studioUrl,
    logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === 'title') {
        return true
      }
      return props.filterDefault(props)
    },
  },
})
