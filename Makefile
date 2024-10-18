SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules


BRANCH := $(shell git rev-parse --abbrev-ref HEAD 2>/dev/null)
COMMIT_SHA := $(shell git rev-parse HEAD)

REGISTRY := registry.digitalocean.com/collie

RELEASE_TAG := latest
ifeq ($(BRANCH),production)
RELEASE_TAG := production
endif

WEBSITE_RELEASE_ENV := staging
ifeq ($(BRANCH),production)
WEBSITE_RELEASE_ENV := production
endif

WEBSITE_CONTAINER_TAGGED := $(REGISTRY)/website:$(RELEASE_TAG)

APP_ENV := stg
ifeq ($(BRANCH),production)
APP_ENV := prd
endif

DOPPLER_TOKEN := $(DOPPLER_TOKEN_STG)
ifeq ($(APP_ENV),prd)
DOPPLER_TOKEN := $(DOPPLER_TOKEN_PRD)
endif

ci-image-tag:
	@echo $(WEBSITE_CONTAINER_TAGGED)

ci-app-env:
	@echo $(APP_ENV)

ci-doppler-token:
	@echo $(DOPPLER_TOKEN)

ci-trigger-build:
	@date > ../infra/ci/site-build
	@git add ../infra/ci/site-build
	@git commit --allow-empty -m '[build:website-container]'
	@git push origin $(BRANCH)

# Just alias it
ci-force-trigger-build: ci-trigger-build
