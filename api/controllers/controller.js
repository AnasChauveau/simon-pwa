const getDate = (req, res) => {
    res.json(Date.now())
}

// Exportation //
module.exports = {
    getDate
}