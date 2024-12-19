interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Spatial Statistical Modeling of Wildfire Incidence in Arizona',
    description: `Predicting location and severity of wildfires using spatial statistics.`,
    imgSrc: '/static/images/math574e-project/coco_wf_intensity_grid.png',
    href: '/blog/math574e-project',
  },
  {
    title: 'Accessing and Using Bathymetric Data',
    description: `An introduction into the functionality of the marmap package in R to access and plot bathymetric data.`,
    imgSrc: '/static/images/math574e-irp/NOAA_ggplot2.png',
    href: '/blog/math574e-irp',
  },
  {
    title: 'Signed Graphs',
    description: `A dive into signed graphs and related properties`,
    imgSrc: '/static/images/math543-project/graph_bg.webp',
    href: '/blog/math543-project',
  },
]

export default projectsData
