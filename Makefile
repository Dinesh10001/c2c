start_db:
	docker-compose up -d postgres


stop_db: 
	docker-compose down 

.PHONY: start_db stop_db