module.exports = (sequelize, Sequelize) => {
  const entities = {};
  
    entities.authentication = sequelize.define('authentication', {
    
    username: {
      type: Sequelize.STRING
    },
    
    password: {
      type: Sequelize.STRING
    }
    
    });
    
    entities.product = sequelize.define('product', {
    
    name: {
      type: Sequelize.STRING
    },
    
    price: {
      type: Sequelize.INTEGER
    },
    
    description: {
      type: Sequelize.BOOLEAN
    }
    
    });
    
    entities.product = sequelize.define('product', {
    
    name: {
      type: Sequelize.STRING
    },
    
    price: {
      type: Sequelize.INTEGER
    },
    
    description: {
      type: Sequelize.BOOLEAN
    }
    
    });
    
    entities.credit = sequelize.define('credit', {
    
    name: {
      type: Sequelize.STRING
    }
    
    });
    
  return entities;
};
