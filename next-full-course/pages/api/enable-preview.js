export default (req, res) => {

    res.setPreviewData({})

    res.statusCode = 200;
    res.json({ name: 'Debasis Saikia' })
}