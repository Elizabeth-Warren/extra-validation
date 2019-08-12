build-image:
	docker build . -t unitedstatesofamerica

build-lib:
	make build-image
	docker run --rm \
		-v $(shell pwd):/usr/src/app \
		unitedstatesofamerica npm run build

build-data:
	make build-image
	docker run --rm \
		-v $(shell pwd):/usr/src/app \
		unitedstatesofamerica npm run build:data

tests:
	make build-image
	make build-lib
	docker run --rm \
		-v $(shell pwd):/usr/src/app \
		unitedstatesofamerica npm run test
