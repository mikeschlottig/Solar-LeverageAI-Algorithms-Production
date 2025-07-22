import uvicorn
from loguru import logger

# Configure logging for AI/ML algorithms
logger.add(
    "../logs/algorithms.log",
    rotation="1 day",
    retention="30 days",
    level="INFO",
    format="{time:YYYY-MM-DD HH:mm:ss} | {level} | {name}:{function}:{line} | {message}"
)

if __name__ == "__main__":
    logger.info("Starting Solar LeverageAI Algorithms backend server")
    
    uvicorn.run(
        "api.bootstrap:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        workers=1,
        log_level="info",
        access_log=True
    )
    
    logger.info("Solar LeverageAI Algorithms server started successfully")