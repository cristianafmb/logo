export const formatVideoDuration = (duration) =>
  parseInt(duration / 60, 10) +
  ':' +
  parseInt(duration - Math.floor(duration / 60) * 60, 10).toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  )

export const formatVideoCurrentTime = (currentTime) => {
  const seconds = parseInt(currentTime, 10).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })

  return (
    parseInt(currentTime / 60, 10) +
    ':' +
    (seconds >= 60
      ? parseInt(seconds - 60, 10).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
      : seconds)
  )
}

export const parseBlogPosts = (edges) =>
  edges
    .sort((a, b) => a.id > b.id ? 1 : -1)
    .map(({ node }) => ({
      id: node.id,
      path: node.frontmatter.path,
      head: node.frontmatter.head,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      data: node.frontmatter.data,
      image: node.frontmatter.image,
      details: node.frontmatter.details,
    }))
