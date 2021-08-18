import Product from '../models/productModel.js';


// @route POST /api/v1/products
// @desc register a product
export const productRegister = async(req, res) => {
    const { 
        usuario, 
        nombre, 
        imagen, 
        marca, 
        categoria, 
        descripcion, 
        rating, 
        comentarios, 
        enStock, 
        precio 
    } = req.body;

    try{
        const newProduct = new Product({
            usuario,
            nombre,
            imagen,
            marca,
            categoria,
            descripcion,
            rating, 
            comentarios,
            enStock,
            precio
        });

        const product = await newProduct.save();
        res.json(product);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    } 
};

// @route GET /api/v1/products
// @desc get all products
export const fetchAllProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: 'Server Error'});
    }
}

// @route   GET /api/v1/products/:id
// @desc    Get single Product
export const getProductById = async(req, res)=> {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(404).json({message: 'Prdoduct Not Found'});
    }
}

