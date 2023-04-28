const createTeam = async (req, res) => {
    const { name, description, owner } = req.body;
    try {
        const team = await Team.create({ name, description, owner });
        return res.status(201).json({
            team,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}